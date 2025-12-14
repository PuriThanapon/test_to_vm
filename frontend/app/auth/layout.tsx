
interface LayoutProps {
	children: React.ReactNode
}

const Authlayout = ({children}: LayoutProps) => {
   return (
      <div className="relative w-svw min-h-svh flex flex-col justify-center overflow-hidden
			bg-[url('/image/bg.png')] bg-cover bg-center
      ">
         <div className="absolute inset-0 backdrop-blur-xs" />
			<main className='z-10'>
				{children}
			</main>
      </div>
   )
}

export default Authlayout
