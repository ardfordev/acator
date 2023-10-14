import NavigationStaf from "@/components/nav-staf"

export const metadata = {
  title: 'Dashboard Staf | ACATOR Dashboard',
  description: 'Academic Navigator Dashboard',
}

export default function StafLayout({ children }) {
  return (
    <div className='flex bg-white h-screen w-full'>
      <NavigationStaf />
      {children}
    </div>
  )
}
