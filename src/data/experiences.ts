/**
 * 程创工作与实践经历
 */

export interface Experience {
  id: string
  title: string
  organization?: string
  period: string
  category: string
  summary: string
  highlights: string[]
  dataPoints: { label: string; value: string }[]
  details: string[]
}

export const experiences: Experience[] = [
  {
    id: 'shibazi',
    title: '新媒体内容运营 / 视频内容制作',
    organization: '拾捌子文化发展有限公司',
    period: '2024.06—2024.12',
    category: '内容运营 / 视频制作',
    summary:
      '负责剧组抖音账号的选题策划、预告片和幕后花絮制作发布，推动账号新增粉丝2000+，单条内容最高播放量10万+。跟进7天拍摄现场，日均整理与审阅50GB+素材，优化素材归档和协作流程。',
    highlights: [
      '账号新增粉丝2000+，单条最高播放10万+',
      '跟进7天拍摄现场，日均整理审阅50GB+素材',
      '记录曝光、场记等技术问题，衔接拍摄与后期',
      '优化素材归档和协作流程，返工率降低40%，制作周期缩短20%',
    ],
    dataPoints: [
      { label: '账号新增粉丝', value: '2000+' },
      { label: '单条最高播放', value: '10万+' },
      { label: '返工率降低', value: '40%' },
    ],
    details: [
      '负责剧组抖音账号从选题策划到发布运营的全流程',
      '制作预告片、幕后花絮等短视频内容，保持账号持续更新',
      '拍摄现场担任场记与素材管理，日均整理50GB+多机位素材',
      '建立素材命名与归档规范，项目复盘后显著优化协作效率',
    ],
  },
  {
    id: 'heigezi',
    title: '游戏动作制作',
    organization: '黑格子科技有限公司（武汉）',
    period: '2025.01—2025.03',
    category: '游戏制作',
    summary:
      '使用3ds Max制作角色基础动作、攻击连招及NPC受击动作，累计交付25+关键帧动画片段。根据碰撞测试与团队反馈优化滞帧、动作过渡和穿模问题。',
    highlights: [
      '累计交付25+关键帧动画片段',
      '制作角色基础动作、攻击连招及NPC受击动画',
      '根据碰撞测试优化滞帧与动作过渡',
      '配合团队反馈解决穿模问题，提升动作连贯性',
    ],
    dataPoints: [
      { label: '交付动画片段', value: '25+' },
    ],
    details: [
      '使用3ds Max完成角色骨骼绑定与关键帧动画制作',
      '输出攻击连招、待机、移动、受击等多种动作状态',
      '配合碰撞测试结果调整动作参数，优化滞帧和过渡',
      '与团队协作修复穿模问题，提升动作视觉连贯性',
    ],
  },
]

export const campusExperience = {
  id: 'campus',
  title: '大连东软信息学院',
  role: '文艺委员 · 艺术社团',
  period: '2021.09—2025.06',
  summary:
    '担任文艺委员，参与组织艺术社团活动。获G CROSS平面设计大赛银奖，大学英语四级。专业排名前10%。',
  highlights: [
    '专业排名前10%',
    'G CROSS平面设计大赛银奖',
    '大学英语四级',
    '文艺委员 · 艺术社团经历',
  ],
}
