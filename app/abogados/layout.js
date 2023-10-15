import Navbar from "@/components/navbar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Navbar/>
      {children}
    </section>
  )
}
