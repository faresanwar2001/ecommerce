import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import RecentProducts from "../RecentProducts/RecentProducts";

export default function Home() {
  return (
    <>
      {/* Main slider */}
      <MainSlider />

      {/* Category slider */}
      <CategorySlider />

      {/* Recent products */}
      <RecentProducts />
    </>
  );
}
