import "dotenv/config";
import { getPayload } from "payload";
import config from "../payload.config";
import slugify from "slugify";

const emptyRichText: any = {
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    children: [
      {
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr",
        children: [
          {
            type: "text",
            text: "Placeholder",
            version: 1,
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
          },
        ],
      },
    ],
    direction: "ltr",
  },
};

function generateSecurePassword(): string {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  const all = uppercase + lowercase + numbers + special

  // Ensure at least one of each required character type
  let password = ''
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += special[Math.floor(Math.random() * special.length)]

  // Fill the rest randomly to make it 16 characters
  for (let i = password.length; i < 16; i++) {
    password += all[Math.floor(Math.random() * all.length)]
  }

  // Shuffle the password
  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
}

export const seed = async () => {
  const payload = await getPayload({ config });
  const seedMode = process.env.SEED_MODE || "full";

  console.log(`Seeding database (mode: ${seedMode})...`);

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  let adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    adminPassword = generateSecurePassword()
    console.warn('\n⚠️  WARNING: ADMIN_PASSWORD not set in environment variables')
    console.warn('Generated a secure password for the admin user:')
    console.warn('─'.repeat(60))
    console.warn(`Email: ${adminEmail}`)
    console.warn(`Password: ${adminPassword}`)
    console.warn('─'.repeat(60))
    console.warn('IMPORTANT: Save this password securely! It will not be shown again.\n')
  }

  const existingUsers = await payload.find({
    collection: "users",
    where: {
      email: {
        equals: adminEmail,
      },
    },
  });

  let adminUser;
  if (existingUsers.docs.length === 0) {
    console.log("Creating admin user...");
    adminUser = await payload.create({
      collection: "users",
      data: {
        email: adminEmail,
        password: adminPassword,
        name: "Admin User",
        role: "admin",
      },
    });
  } else {
    adminUser = existingUsers.docs[0];
    console.log("Admin user already exists.");
  }

  if (seedMode === "minimal") {
    console.log("Applying minimal baseline globals...");

    await payload.updateGlobal({
      slug: "site-settings",
      data: {
        siteTitle: process.env.NEXT_PUBLIC_SITE_NAME || "My Site",
        termsOfService: emptyRichText,
        privacyPolicy: emptyRichText,
      },
    });

    await payload.updateGlobal({
      slug: "header",
      data: {
        navItems: [],
      },
    });

    await payload.updateGlobal({
      slug: "footer",
      data: {
        navItems: [],
      },
    });

    await payload.updateGlobal({
      slug: "content-generation-settings",
      data: {
        apiConfig: {
          baseUrl: "",
          apiKey: "",
        },
        companyContext: {
          companyName: "",
          location: "",
          expertise: "",
          primaryColor: "",
          secondaryColor: "",
        },
        keywords: [],
        topicResearch: {
          prompt: "",
        },
        postGeneration: {
          prompt: "",
        },
        featuredImageStyles: [],
        infographic: {
          dataExtractionPrompt: "",
          imageGenerationPrompt: "",
        },
      },
    });

    console.log("Minimal baseline seed completed successfully.");
    return;
  }

  // Create sample media
  console.log("Creating sample media...");
  const mediaData = [
    {
      alt: "Getting Started with Our Platform",
    },
    {
      alt: "Best Practices for Modern Development",
    },
    {
      alt: "Future of Tech and Innovation",
    },
    {
      alt: "Eliza: The Best Agent Framework Ever",
    },
    {
      alt: "OpenClaw: The Best Agent Framework Ever",
    },
    {
      alt: "OpenAI Images 2.0, Claude Design, and Claude Opus 4.7",
    },
  ];

  const mediaItems = await Promise.all(
    mediaData.map(async (data, index) => {
      const response = await fetch(
        `https://picsum.photos/seed/${index + 42}/1200/630`
      );
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return payload.create({
        collection: "media",
        data,
        file: {
          data: buffer,
          mimetype: "image/jpeg",
          name: `sample-image-${index + 1}.jpg`,
          size: buffer.length,
        },
      });
    })
  );

  // Sample categories and tags
  console.log("Creating categories and tags...");
  const categoryNames = [
    "Tutorials",
    "Onboarding",
    "Development",
    "Engineering",
    "Future Tech",
    "AI",
    "Agent Frameworks",
    "Workflows",
  ];
  const tagNames = [
    "basics",
    "guide",
    "platform",
    "nextjs",
    "performance",
    "clean-code",
    "payload",
    "innovation",
    "trends",
    "artificial-intelligence",
    "agents",
    "eliza",
    "openclaw",
    "claude",
    "opus",
    "openai",
    "design",
    "stack",
  ];

  const categoryMap: Record<string, number> = {};
  const tagMap: Record<string, number> = {};

  await Promise.all(
    categoryNames.map(async (name) => {
      const cat = await payload.create({
        collection: "categories",
        data: {
          name,
          slug: slugify(name, { lower: true, strict: true }),
        },
      });
      categoryMap[name] = cat.id as number;
    })
  );

  await Promise.all(
    tagNames.map(async (name) => {
      const tag = await payload.create({
        collection: "tags",
        data: {
          name,
          slug: slugify(name, { lower: true, strict: true }),
        },
      });
      tagMap[name] = tag.id as number;
    })
  );

  // Sample posts data
  const postsData = [
    {
      title: "Getting Started with Our Platform",
      slug: "getting-started",
      excerpt:
        "Learn the basics of how to use our platform effectively for your next project.",
      image: mediaItems[0].id,
      categories: ["Tutorials", "Onboarding"],
      tags: ["basics", "guide", "platform"],
      publishedDate: new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 5
      ).toISOString(), // 5 days ago
      meta: {
        title: "Complete Guide to Getting Started",
        description:
          "The ultimate guide for new users to master our platform in minutes.",
      },
    },
    {
      title: "Best Practices for Modern Development",
      slug: "best-practices",
      excerpt:
        "Discover the latest tips and techniques for building high-performance web applications.",
      image: mediaItems[1].id,
      categories: ["Development", "Engineering"],
      tags: ["nextjs", "performance", "clean-code", "payload"],
      publishedDate: new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 2
      ).toISOString(), // 2 days ago
      meta: {
        title: "Modern Web Development Best Practices 2024",
        description:
          "Stay ahead of the curve with these essential engineering tips for modern teams.",
      },
    },
    {
      title: "Building for the Future",
      slug: "building-for-the-future",
      excerpt:
        "Explore the vision and thought leadership behind the technologies of tomorrow.",
      image: mediaItems[2].id,
      categories: ["Future Tech", "AI"],
      tags: ["innovation", "trends", "artificial-intelligence"],
      publishedDate: new Date().toISOString(),
      meta: {
        title: "The Future of Technology: What to Expect",
        description:
          "An in-depth look at the emerging technologies that will shape our world.",
      },
    },
    {
      title: "Eliza Is the Best Agent Framework Ever",
      slug: "eliza-best-agent-framework",
      excerpt:
        "Why Eliza has emerged as a favorite for builders shipping autonomous agents in production.",
      image: mediaItems[3].id,
      categories: ["AI", "Agent Frameworks"],
      tags: ["agents", "eliza", "artificial-intelligence"],
      publishedDate: new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 1
      ).toISOString(),
      meta: {
        title: "Eliza Is the Best Agent Framework Ever",
        description:
          "An opinionated take on why Eliza wins for character-driven autonomous agents.",
      },
      paragraphs: [
        "Eliza has quietly become the agent framework I reach for first. It is opinionated where it needs to be and flexible where it counts, and the result is a developer experience that gets out of your way once you have wired up your character file and a model provider.",
        "The plugin system is the real unlock. Memory, actions, evaluators, and providers compose cleanly, which means you can take an agent from a Discord bot to an on-chain trader without rewriting your core loop. Most frameworks force you to choose between a tight runtime and an extensible one. Eliza gives you both.",
        "If you are starting a new agent project this week, start with Eliza. You will spend more time on the interesting parts (personality, tools, world model) and less time fighting the framework.",
      ],
    },
    {
      title: "OpenClaw Is the Best Agent Framework Ever",
      slug: "openclaw-best-agent-framework",
      excerpt:
        "A look at OpenClaw, the open-source agent framework that takes a different approach to tool use and orchestration.",
      image: mediaItems[4].id,
      categories: ["AI", "Agent Frameworks"],
      tags: ["agents", "openclaw", "artificial-intelligence", "innovation"],
      publishedDate: new Date(
        Date.now() - 1000 * 60 * 60 * 12
      ).toISOString(),
      meta: {
        title: "OpenClaw Is the Best Agent Framework Ever",
        description:
          "Why OpenClaw's orchestration model and tool ergonomics make it a top pick for production agents.",
      },
      paragraphs: [
        "OpenClaw takes a refreshingly minimal approach to agent orchestration. Instead of layering abstractions on top of abstractions, it gives you a small, sharp set of primitives: a planner, a tool registry, and a structured trace. Everything else is your code.",
        "What sells me on OpenClaw is the tool ergonomics. Tools are typed, side-effects are explicit, and retries are first-class. Debugging an agent run feels less like reading a séance transcript and more like reading a stack trace, which is exactly what you want at 2am when production is on fire.",
        "If Eliza is the right call for character-driven agents, OpenClaw is the right call for the boring, reliable, business-critical kind. And honestly, that is most of what we ship.",
      ],
    },
    {
      title: "OpenAI Images 2.0 → Claude Design → Claude Opus 4.7 Is the Best Stack Ever",
      slug: "openai-images-claude-design-opus-4-7-stack",
      excerpt:
        "A pipeline for shipping polished product surfaces fast: generate with OpenAI Images 2.0, refine in Claude Design, build with Claude Opus 4.7.",
      image: mediaItems[5].id,
      categories: ["AI", "Workflows"],
      tags: ["claude", "opus", "openai", "design", "stack", "artificial-intelligence"],
      publishedDate: new Date().toISOString(),
      meta: {
        title: "The OpenAI Images 2.0 → Claude Design → Claude Opus 4.7 Stack",
        description:
          "How to chain image generation, design refinement, and code generation into a single, fast product pipeline.",
      },
      paragraphs: [
        "There is a pipeline I keep coming back to and it is hard to beat: start in OpenAI Images 2.0 to get a directional visual, hand the result to Claude Design to nail layout and component structure, then drop the spec into Claude Opus 4.7 to write the code. Each step plays to the strength of the model behind it.",
        "OpenAI Images 2.0 is the right tool for ideation. It gets you a credible visual quickly and lets you explore three or four directions before committing. The output is rarely the final art, but it is the fastest way I know to externalize a vague idea so the rest of the team can react to it.",
        "Claude Design is the bridge. It takes a generated image and turns it into something a frontend engineer can actually build: spacing, hierarchy, component breakdown, and tokens. This is the step most teams skip, and it shows up later as inconsistent margins and one-off components nobody wants to maintain.",
        "Claude Opus 4.7 closes the loop. It reads the design spec, generates the components in your stack of choice, and is patient enough to wire up the boring parts. The combined pipeline takes a Friday-afternoon idea and ships it by Monday standup, and that is why this is the best stack ever.",
      ],
    },
  ];

  console.log("Creating sample posts...");
  for (const post of postsData) {
    const paragraphs =
      (post as { paragraphs?: string[] }).paragraphs ?? [
        `This is a comprehensive guide about ${post.title}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ];

    await payload.create({
      collection: "posts",
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        featuredImage: post.image,
        author: adminUser.id,
        _status: "published",
        publishedDate: post.publishedDate,
        categories: post.categories.map((name) => categoryMap[name]),
        tags: post.tags.map((name) => tagMap[name]),
        meta: {
          ...post.meta,
          image: post.image,
        },
        content: {
          root: {
            type: "root",
            format: "",
            indent: 0,
            version: 1,
            children: paragraphs.map((text) => ({
              type: "paragraph",
              format: "",
              indent: 0,
              version: 1,
              direction: "ltr",
              children: [
                {
                  type: "text",
                  text,
                  version: 1,
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                },
              ],
            })),
            direction: "ltr",
          },
        },
      },
    });
  }

  console.log("Seed completed successfully.");
};

if (process.env.PAYLOAD_SEED === "true") {
  seed().catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
}
