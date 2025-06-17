export const isProduction = process.env.NODE_ENV === 'production'

export const SITE_URL = isProduction ? 'https://nelsonlai.me' : 'http://localhost:3000'

export const GITHUB_USERNAME = 'Rutchx'

export const SITE_NAME = 'Rutchx'
export const SITE_KEYWORDS = ['tszhong0411', 'Next.js', 'React', 'TypeScript', 'Node.js']

export const SITE_GITHUB_URL = 'https://github.com/therw101'
export const SITE_FACEBOOK_URL = 'https://www.facebook.com/share/16Xr78j9Nm/'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/rutchanon_pach?igsh=cDdnbWZ0YWhmNjZq'
export const SITE_X_URL = 'https://x.com/Rutchx'
export const SITE_YOUTUBE_URL = 'https://www.youtube.com/@Rutchx'

export const COMMENT_TYPES = ['comment', 'reply'] as const
export const USER_ROLES = ['user', 'admin'] as const
