import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AdminFilters from "@/components/admin/admin-filters"
import AdminUsersList from "@/components/admin/admin-users-list"
import LoadingUsers from "@/components/loading-users"
import { Shield } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-olive-500" />
              <h1 className="text-3xl font-bold text-zinc-100 border-l-4 border-olive-600 pl-4">Command Center</h1>
            </div>
            <p className="text-zinc-400 mt-2">
              Administrative control panel for personnel management and data operations
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <div className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">
              <span className="text-olive-500 font-bold">ADMIN</span> CONSOLE
            </div>
            <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
          </div>
        </div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-md mb-8">
          <div className="p-4 border-b border-zinc-700">
            <h2 className="text-lg font-semibold text-zinc-100">Personnel Filtering System</h2>
            <p className="text-xs text-zinc-400 mt-1">Apply filters to locate specific personnel records</p>
          </div>
          <div className="p-4">
            <AdminFilters />
          </div>
        </div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-md">
          <div className="p-4 border-b border-zinc-700 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">Personnel Records</h2>
              <p className="text-xs text-zinc-400 mt-1">Complete database of registered personnel</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-400">
                Security Level: <span className="text-olive-500 font-bold">ALPHA</span>
              </div>
            </div>
          </div>

          <Suspense fallback={<LoadingUsers />}>
            <AdminUsersList />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
