import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import Container from "../general/Container";
import _ from "lodash";

interface BreadcrumbProps {
  startName?: string;
  bc?: string;
}

const Breadcrumb = ({ startName = "Home", bc }: BreadcrumbProps) => {
  const { pathname } = useRouter();

  if (!(bc || pathname)) return null;

  const bcRouteList = (bc || pathname)
    .slice(1)
    .split("/")
    .reduce(
      (acc, item) => {
        acc.push({ path: acc.slice(-1)[0].path + `${item}/`, name: item });
        return acc;
      },
      [{ path: "/", name: startName }]
    );

  return (
    <nav>
      <Container>
        <div className="flex py-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 md:space-x-3">
            <li className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <AiFillHome />
                {_.capitalize(bcRouteList[0].name)}
              </Link>
            </li>
            {bcRouteList.splice(1).map((item, i, row) => (
              <li
                key={item.path}
                aria-current={i + 1 === row.length ? "page" : undefined}
              >
                <div className="flex items-center">
                  <BiChevronRight size={24} className="text-gray-400" />

                  {i + 1 !== row.length ? (
                    <Link
                      href={item.path}
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                    >
                      {_.capitalize(item.name)}
                    </Link>
                  ) : (
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                      {_.capitalize(item.name)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </nav>
  );
};

export default Breadcrumb;
