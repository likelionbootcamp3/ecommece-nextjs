import PageBanner from "../components/feedback/PageBanner";
import Breadcrumb from "../components/navigation/Breadcrumb";
import CategoriesGrid from "../components/section/categories/CategoriesGrid";

const Categories = () => {
  return (
    <div>
      <PageBanner name="Shop" bg="bg-banner-shop" />
      <Breadcrumb />
      <CategoriesGrid />
      <div className="bg-banner-hero h-[200px]"></div>
    </div>
  );
};

export default Categories;
