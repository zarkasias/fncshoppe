import { SelectedPage } from "@/shared/types";

type LinkProps = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ 
    page,
    selectedPage,
    setSelectedPage,
 }: LinkProps) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    return (
      <a
        className={` ${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </a>
    );
  };

export default Link;