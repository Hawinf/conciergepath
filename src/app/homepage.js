// import Navbar from "./components/navbar/navbar";
// import Header from "./components/header/header";
// import Footer from "./components/footer/footer";

// export default function HomePage() {
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// pages/index.js or page.js

import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Header />
        {/* Your main content goes here */}
      </main>
      
      <Footer />
    </div>
  );
}
