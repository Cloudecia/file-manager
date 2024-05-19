import { Fragment } from "react";

import sidebar from "@/assets/data/fileManagerSidebar";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="pb-12">
        {sidebar.map((item) => {
          return (
            <Fragment key={item.id}>
              <div className="px-7 py-2">
                <h4 className="mb-2 text-sm font-semibold tracking-tight text-brand-300">{item.title}</h4>
                <div className="space-y-1">
                  {item.children.map(({ id, url, title, icon: Icon }) => {
                    const isActive = url == pathname;

                    return (
                      <Link
                        key={id}
                        to={url}
                        className={`flex gap-4 items-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground hover:bg-zinc-200/50 h-9 py-2 w-full justify-start overflow-hidden text-ellipsis bg-transparent px-3 ${
                          isActive ? "bg-zinc-200 shadow-sm " : "shadow-none"
                        }`}
                      >
                        {" "}
                        <Icon /> <span>{title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default SideNav;
