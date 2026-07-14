import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '@/components/shared/ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      {/* Temporary notice — remove when real content is ready */}
      <div className="text-center py-2 px-4 text-[11px]" style={{ backgroundColor: 'rgba(184,147,110,0.08)', color: 'rgba(200,192,184,0.4)' }}>
        程创个人网站正在更新 · 部分人物与项目内容暂为页面结构占位，正式资料整理完成后开放
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
