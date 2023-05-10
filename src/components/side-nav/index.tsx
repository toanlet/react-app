interface SideNavProps {
  actived?: string;
}

export const SideNav: React.FC<SideNavProps> = ({ actived }) => {
  return <div>ID: {actived}</div>;
};
