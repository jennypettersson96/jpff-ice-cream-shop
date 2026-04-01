import heroImg from "@/assets/hero-icecream.jpg";
import aboutImg from "@/assets/about-icecream.jpg";
import popsiclesImg from "@/assets/popsicles.jpg";
import sundaeImg from "@/assets/sundae.jpg";
import milkshakeImg from "@/assets/milkshake.jpg";
import { IceCream, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#" className="flex items-center gap-2 text-primary font-bold text-2xl" style={{ fontFamily: "'Fredoka One', cursive" }}>
            <IceCream className="w-8 h-8" />
            JPFF
          </a>
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Our Ice Creams</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Colorful ice cream cone" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
            COLORFUL ICE CREAMS
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto">
            Life is better with a scoop of color. Handmade with love by JPFF Testing.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Fredoka One', cursive" }}>
              ABOUT US
            </h2>
            <p className="text-lg font-semibold text-foreground/80 mb-4">
              At JPFF Testing, we believe ice cream should be as colorful as life itself.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              We craft every scoop with fresh, natural ingredients and a splash of creativity. From classic flavors to wild rainbow creations, our ice creams are made to bring joy and smiles. Whether you're a vanilla lover or a bubblegum dreamer, we've got something special for you.
            </p>
          </div>
          <img src={aboutImg} alt="Family enjoying ice cream" className="rounded-lg shadow-lg w-full" loading="lazy" width={800} height={600} />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "'Fredoka One', cursive" }}>
            OUR ICE CREAMS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: popsiclesImg, title: "Rainbow Popsicles", desc: "Fruity layers of color in every bite. Perfect for a hot summer day." },
              { img: sundaeImg, title: "Colorful Sundaes", desc: "Loaded with scoops, whipped cream, sprinkles and a cherry on top." },
              { img: milkshakeImg, title: "Magic Milkshakes", desc: "Blended to perfection with our signature colorful ice cream." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover" loading="lazy" width={512} height={512} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
            QUESTIONS?
          </h2>
          <p className="text-foreground/70 mb-10">
            Want to know more about our colorful creations? Don't hesitate to reach out!
          </p>
          <div className="flex flex-col items-center gap-4 text-lg">
            <a href="mailto:jpfftesting@mejl.com" className="flex items-center gap-3 text-primary hover:underline">
              <Mail className="w-5 h-5" /> jpfftesting@mejl.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} JPFF Testing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
