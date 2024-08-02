interface AppLayoutProps {
  children: React.ReactNode;
}

export default function JobsListLayout({ children }: AppLayoutProps) {
  return <div className="flex-1 px-4">{children}</div>;
}
