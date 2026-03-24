export const afterLoginFailedHook = async ({
  req,
  email,
}: {
  req: any
  email: string
}) => {
  const ip =
    req.headers?.['x-forwarded-for'] || req.headers?.['x-real-ip'] || 'unknown'

  console.warn('Failed login attempt', {
    email,
    ip,
    timestamp: new Date().toISOString(),
    userAgent: req.headers?.['user-agent'],
  })

  // TODO: Add email alerting here if desired
  // Example: Send email to admin after N failed attempts from same IP
}
