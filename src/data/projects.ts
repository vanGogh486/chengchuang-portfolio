/**
 * 程创精选项目数据 — 4个真实项目
 */

export interface Project {
  slug: string
  title: string
  englishTitle: string
  year: string
  category: string
  role: string
  summary: string
  cover: string
  preview: string
  hoverVideo: string | null
  fullVideo: string | null
  gallery: string[]
  process?: string[]
  featured: boolean
  size: 'large' | 'medium' | 'wide'
  disclaimer: string
  tools?: string[]
}

export const projects: Project[] = [
  {
    slug: 'unarmored',
    title: '《卸甲》',
    englishTitle: 'UNARMORED',
    year: '2025',
    category: 'AIGC叙事短片',
    role: '独立创作者',
    summary:
      '独立完成创意策划、脚本分镜、人物与场景生成、动态化和后期剪辑。以战争结束后的木兰为切口，通过物件、动作和环境表达创伤、归来与身份转变。',
    cover: '/media/portfolio-v2/projects/unarmored/poster.png',
    preview: '/projects/unarmored/preview.mp4',
    hoverVideo: '/projects/unarmored/preview.mp4',
    fullVideo: '/projects/unarmored/full.mp4',
    gallery: [],
    featured: true,
    size: 'large',
    disclaimer: '',
  },
  {
    slug: 'midnight-elevator',
    title: '《午夜电梯》',
    englishTitle: 'MIDNIGHT ELEVATOR',
    year: '2025',
    category: '互动悬疑短片',
    role: '独立创作者',
    summary:
      '完成9:16互动悬疑内容策划，以分支选择、线索递进和限时决策推动剧情，负责氛围设定、脚本分镜、画面生成和成片制作。',
    cover: '/media/portfolio-v2/projects/midnight-elevator/poster.png',
    preview: '/projects/midnight-elevator/preview.mp4',
    hoverVideo: null,
    fullVideo: '/projects/midnight-elevator/full.mp4',
    gallery: [],
    featured: true,
    size: 'wide',
    disclaimer: '',
  },
  {
    slug: 'vivo-relic',
    title: 'vivo 产品概念宣传视频',
    englishTitle: 'VIVO CONCEPT FILM',
    year: '2025',
    category: '品牌内容与视觉练习',
    role: '独立制作',
    summary:
      '从产品功能卖点出发，完成内容结构、镜头设计、AI画面生成和剪辑包装，建立"卖点—场景—节奏"的内容映射，并针对产品一致性与商业质感进行多轮优化。',
    cover: '/media/portfolio-v2/projects/vivo/poster.png',
    preview: '/projects/vivo-relic/preview.mp4',
    hoverVideo: null,
    fullVideo: '/projects/vivo-relic/full.mp4',
    gallery: [],
    featured: true,
    size: 'medium',
    disclaimer: '个人概念练习',
  },
  {
    slug: 'nuoxi',
    title: '《傩影传说》',
    englishTitle: 'NUO SHADOW LEGEND',
    year: '2025',
    category: 'Unity毕业设计',
    role: '项目主创',
    summary:
      '围绕传统傩文化完成玩法设计、场景搭建、交互逻辑与视觉呈现，协调三维资产、动作、交互和展示视频，形成可演示的Unity项目。',
    cover: '',
    preview: '',
    hoverVideo: null,
    fullVideo: null, published: false,
    gallery: [],
    featured: true,
    size: 'medium',
    disclaimer: '',
  },
]
