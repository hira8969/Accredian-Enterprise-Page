"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap, BarChart2, Users, BookOpen, Award, Bell,
  LogOut, Settings, TrendingUp, Clock, ChevronRight, Play, CheckCircle
} from "lucide-react";

interface User {
  name: string;
  email: string;
  company: string;
  role: string;
}

const programs = [
  { name: "Data Science & AI", progress: 72, enrolled: 142, color: "from-blue-500 to-cyan-500" },
  { name: "Product Management", progress: 58, enrolled: 89, color: "from-purple-500 to-pink-500" },
  { name: "Full Stack Dev", progress: 91, enrolled: 213, color: "from-green-500 to-emerald-500" },
  { name: "Digital Marketing", progress: 44, enrolled: 67, color: "from-orange-500 to-yellow-500" },
];

const recentActivity = [
  { user: "Priya S.", action: "Completed Module 4 — Neural Networks", time: "2 min ago", icon: CheckCircle, color: "text-green-500" },
  { user: "Rahul M.", action: "Started Data Science & AI program", time: "15 min ago", icon: Play, color: "text-blue-500" },
  { user: "Anika K.", action: "Submitted capstone project", time: "1 hr ago", icon: Award, color: "text-purple-500" },
  { user: "Dev P.", action: "Scored 95% in Product Quiz", time: "3 hr ago", icon: TrendingUp, color: "text-yellow-500" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const token = localStorage.getItem("auth_token");
    if (!stored || !token) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-slate-900 flex flex-col z-40 hidden md:flex">
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold">
              Accre<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">dian</span>
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: BarChart2, label: "Dashboard", active: true },
            { icon: BookOpen, label: "Programs" },
            { icon: Users, label: "Team" },
            { icon: Award, label: "Certifications" },
            { icon: TrendingUp, label: "Analytics" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active
                  ? "gradient-bg text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 gradient-bg rounded-full flex items-center justify-center text-white text-sm font-bold">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{user.name}</p>
              <p className="text-slate-400 text-xs truncate">{user.company}</p>
            </div>
          </div>
          <button
            id="logout-btn"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-slate-400 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg text-sm transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="md:ml-64 p-6 md:p-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, {user.name.split(" ")[0]}! 👋</h1>
            <p className="text-slate-500 text-sm mt-1">{user.company} · {user.role}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="notifications-btn"
              className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-all"
            >
              ← Back to site
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Enrolled", value: "511", change: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
            { icon: CheckCircle, label: "Completed", value: "324", change: "+8%", color: "text-green-600", bg: "bg-green-50" },
            { icon: Clock, label: "Avg. Hrs / Week", value: "6.2", change: "+0.4", color: "text-purple-600", bg: "bg-purple-50" },
            { icon: Award, label: "Certifications", value: "187", change: "+23", color: "text-orange-600", bg: "bg-orange-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
              <p className="text-slate-500 text-xs mt-1">{s.label}</p>
              <p className={`text-xs font-semibold mt-2 ${s.color}`}>↑ {s.change} this month</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Program Progress */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-900">Active Programs</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-5">
              {programs.map((p) => (
                <div key={p.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-800">{p.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">{p.enrolled} enrolled</span>
                      <span className="text-xs font-semibold text-slate-700">{p.progress}%</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${p.color} rounded-full transition-all duration-500`}
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-900">Recent Activity</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <act.icon className={`w-4 h-4 ${act.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-800">
                      <span className="font-semibold">{act.user}</span> {act.action}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enroll banner */}
        <div className="mt-6 gradient-bg rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">New cohort starting May 15, 2026</p>
            <p className="text-blue-100 text-sm mt-1">48 seats remaining · Post Graduate Program in Data Science & AI</p>
          </div>
          <Link
            href="/#lead-form"
            id="dashboard-enroll-btn"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap text-sm"
          >
            Enroll Your Team →
          </Link>
        </div>
      </main>
    </div>
  );
}
