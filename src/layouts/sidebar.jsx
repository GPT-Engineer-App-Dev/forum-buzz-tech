import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import Footer from "@/components/Footer"; // Import Footer component

const categories = [
  { name: "General", icon: <Package2 className="h-4 w-4" /> },
  { name: "JavaScript", icon: <Package2 className="h-4 w-4" /> },
  { name: "React", icon: <Package2 className="h-4 w-4" /> },
  // Add more categories as needed
];

const recentPosts = [
  { title: "Understanding closures in JavaScript", author: "Alice" },
  { title: "React hooks best practices", author: "Bob" },
  // Add more recent posts as needed
];

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1">{/* Add nav bar content here! */}</div>
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <Footer /> {/* Add Footer component */}
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Acme Inc</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {categories.map((category) => (
            <SidebarNavLink key={category.name} to={`/${category.name.toLowerCase()}`}>
              {category.icon}
              {category.name}
            </SidebarNavLink>
          ))}
        </nav>
        <div className="mt-4 px-2 lg:px-4">
          <h2 className="text-lg font-semibold mb-2">Recent Posts</h2>
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li key={index} className="text-sm">
                <NavLink to={`/post/${index}`} className="hover:underline">
                  {post.title} - {post.author}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        {categories.map((category) => (
          <SidebarNavLink key={category.name} to={`/${category.name.toLowerCase()}`}>
            {category.icon}
            {category.name}
          </SidebarNavLink>
        ))}
      </nav>
      <div className="mt-4 px-2 lg:px-4">
        <h2 className="text-lg font-semibold mb-2">Recent Posts</h2>
        <ul className="space-y-2">
          {recentPosts.map((post, index) => (
            <li key={index} className="text-sm">
              <NavLink to={`/post/${index}`} className="hover:underline">
                {post.title} - {post.author}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;