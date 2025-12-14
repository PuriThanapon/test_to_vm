import HeaderNav from "@/components/header-nav/header-nav"
import SideNav from "@/components/side-nav/side-nav"

interface LayoutProps {
	children: React.ReactNode
}

const Authlayout = ({children}: LayoutProps) => {
   return (
      <div className="w-svw min-h-svh bg-gray-100">
         <SideNav></SideNav>
         <HeaderNav></HeaderNav>
         <main className="pt-24 pl-64 pr-4 pb-4">
            {children}
         </main>
			
      </div>
   )
}

export default Authlayout