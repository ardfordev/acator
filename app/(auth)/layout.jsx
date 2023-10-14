import FooterAuth from "@/components/footer-auth"
import HeaderAuth from "@/components/header-auth"

export const metadata = {
  title: 'Login | ACATOR Dashboard',
  description: 'Academic Navigator Dashboard',
}

export default function AuthLayout({ children }) {
  return (
    <section className="bg-white">
      <HeaderAuth />
      {children}
      <FooterAuth />
    </section>
  )
}
