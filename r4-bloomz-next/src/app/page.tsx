
"use client";
import React, { useMemo, useState } from "react";
import { ShoppingBag, Heart, Search, Sparkles, Star, BadgePercent, Filter, Instagram, Truck, ShieldCheck, Phone, Mail, MapPin, CreditCard, LogIn, UserPlus, X, Menu } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const CATEGORIES = [
  { key: "womens", label: "Women’s Clothing" },
  { key: "jewelry", label: "Jewelry" },
  { key: "accessories", label: "Accessories" },
  { key: "kids", label: "Family & Kids" },
];

const PRODUCTS = [
  { id: 1, name: "Kanchipuram Silk Saree", category: "womens", price: 189.0, rating: 4.9, reviews: 112, tags: ["ethnic", "handloom"], img: "https://images.unsplash.com/photo-1582583621760-860f4a0cde1e?q=80&w=1400&auto=format&fit=crop" },
  { id: 2, name: "Oxidized Silver Jhumka", category: "jewelry", price: 39.0, rating: 4.7, reviews: 86, tags: ["silver", "handcrafted"], img: "https://images.unsplash.com/photo-1617038260897-41c5965d614d?q=80&w=1400&auto=format&fit=crop" },
  { id: 3, name: "Block-Print Kurta", category: "womens", price: 49.0, rating: 4.6, reviews: 73, tags: ["cotton", "artisan"], img: "https://images.unsplash.com/photo-1621373581131-9f3c8b4e1c69?q=80&w=1400&auto=format&fit=crop" },
  { id: 4, name: "Meenakari Pendant Set", category: "jewelry", price: 59.0, rating: 4.8, reviews: 65, tags: ["meenakari", "festive"], img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1400&auto=format&fit=crop" },
  { id: 5, name: "Handloom Cotton Dupatta", category: "accessories", price: 24.0, rating: 4.4, reviews: 28, tags: ["handloom", "lightweight"], img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop" },
  { id: 6, name: "Embellished Clutch", category: "accessories", price: 29.0, rating: 4.5, reviews: 31, tags: ["party", "handmade"], img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop" },
  { id: 7, name: "Kids Festive Kurta Set", category: "kids", price: 35.0, rating: 4.6, reviews: 40, tags: ["kids", "festive"], img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1400&auto=format&fit=crop" },
  { id: 8, name: "Temple Jewelry Bangles", category: "jewelry", price: 69.0, rating: 4.9, reviews: 98, tags: ["temple", "traditional"], img: "https://images.unsplash.com/photo-1617038260727-48d88b177a8f?q=80&w=1400&auto=format&fit=crop" },
];

const CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "INR", symbol: "₹" },
];

const StarRow = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? "fill-current" : ""}`} />
    ))}
  </div>
);

const PromoBar = () => (
  <div className="w-full bg-black text-white text-xs sm:text-sm py-2 text-center flex items-center justify-center gap-2">
    <BadgePercent className="h-4 w-4" />
    Festive Launch Offer: Use code <span className="font-semibold">BLOOM10</span> for 10% off • Free shipping over $75
  </div>
);

const Logo = () => (
  <div className="flex flex-col leading-tight">
    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">R4 Bloomz</div>
    <div className="text-xs sm:text-sm text-muted-foreground -mt-0.5">Authentic. Ethical. Elegant.</div>
  </div>
);

const Footer = () => (
  <footer className="mt-20 border-t">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8">
      <div>
        <Logo />
        <p className="text-sm text-muted-foreground mt-3">Rooted in tradition, crafted with integrity. Curated Indian fashion, jewelry, and accessories delivered from our home boutique to yours.</p>
        <div className="flex gap-3 mt-4 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4" /> Ethical sourcing
          <Truck className="h-4 w-4 ml-4" /> Fast shipping
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Shop</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Women’s Clothing</li>
          <li>Jewelry</li>
          <li>Accessories</li>
          <li>Family & Kids</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Shipping & Returns</li>
          <li>Size Guide</li>
          <li>Care & Materials</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (203) 555‑0199</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@r4bloomz.com</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Stamford, CT • Chennai, IN</p>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-muted-foreground pb-8">© {new Date().getFullYear()} R4 Bloomz. All rights reserved.</div>
  </footer>
);

export default function Page() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [activeCats, setActiveCats] = useState(new Set(CATEGORIES.map(c => c.key)));
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<{id:number, qty:number}[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<null | "login" | "register">(null);

  const toggleCat = (key: string) => {
    const next = new Set(activeCats);
    next.has(key) ? next.delete(key) : next.add(key);
    setActiveCats(next);
  };

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => activeCats.has(p.category) && p.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, activeCats]);

  const addToWishlist = (id:number) => setWishlist(prev => prev.includes(id) ? prev : [...prev, id]);
  const removeFromWishlist = (id:number) => setWishlist(prev => prev.filter(x => x !== id));
  const addToCart = (id:number) => setCart(prev => {
    const item = prev.find(i => i.id === id);
    return item ? prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i) : [...prev, { id, qty: 1 }];
  });

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PromoBar />

      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6" />
          </button>
          <Logo />
          <div className="hidden md:flex items-center gap-6 ml-8 text-sm">
            <NavLink label="Home" active={page === "home"} onClick={() => setPage("home")} />
            <NavLink label="Shop" active={page === "shop"} onClick={() => setPage("shop")} />
            <NavLink label="About" active={page === "about"} onClick={() => setPage("about")} />
            <NavLink label="Blog / Lookbook" active={page === "blog"} onClick={() => setPage("blog")} />
            <NavLink label="Contact" active={page === "contact"} onClick={() => setPage("contact")} />
            <NavLink label="Shipping & Returns" active={page === "policies"} onClick={() => setPage("policies")} />
          </div>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2 border rounded-full px-3 py-1.5">
              <Search className="h-4 w-4" />
              <input placeholder="Search products" className="outline-none text-sm w-40" value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            {/* Currency native select */}
            <select
              value={currency.code}
              onChange={(e)=> {
                const v = e.target.value;
                const found = CURRENCIES.find(c=>c.code===v) || CURRENCIES[0];
                setCurrency(found);
              }}
              className="border rounded-md px-2 py-1 text-sm"
            >
              {CURRENCIES.map(c=> <option key={c.code} value={c.code}>{c.code}</option>)}
            </select>

            <Button variant="ghost" onClick={() => setAuthMode("login")} aria-label="Login">
              <LogIn className="h-5 w-5" />
            </Button>
            <Button variant="ghost" onClick={() => setAuthMode("register")} aria-label="Register">
              <UserPlus className="h-5 w-5" />
            </Button>

            <Button variant="ghost" onClick={() => setPage("wishlist")}>
              <Heart className="h-5 w-5 mr-1" /> Wishlist {wishlist.length ? `(${wishlist.length})` : ""}
            </Button>
            <Button onClick={() => setPage("cart")}>
              <ShoppingBag className="h-5 w-5 mr-1" /> Cart {cartCount ? `(${cartCount})` : ""}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t">
            {[
              { k: "home", l: "Home" },
              { k: "shop", l: "Shop" },
              { k: "about", l: "About" },
              { k: "blog", l: "Blog / Lookbook" },
              { k: "contact", l: "Contact" },
              { k: "policies", l: "Shipping & Returns" },
            ].map((it) => (
              <button key={it.k} className={`block w-full text-left px-4 py-3 ${page === it.k ? "bg-gray-50" : ""}`} onClick={() => { setPage(it.k); setMenuOpen(false); }}>
                {it.l}
              </button>
            ))}
          </div>
        )}
      </header>

      {page === "home" && <Home setPage={setPage} symbol={currency.symbol} />}
      {page === "shop" && (
        <Shop
          symbol={currency.symbol}
          filtered={filtered}
          activeCats={activeCats}
          toggleCat={toggleCat}
          addToWishlist={addToWishlist}
          wishlist={wishlist}
          addToCart={addToCart}
        />
      )}
      {page === "about" && <About />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Contact />}
      {page === "policies" && <Policies />}
      {page === "wishlist" && <Wishlist ids={wishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} symbol={currency.symbol} />}
      {page === "cart" && <Cart cart={cart} addToCart={addToCart} symbol={currency.symbol} />}

      <Footer />

      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />}
    </div>
  );
}

function NavLink({ label, active, onClick }: { label:string; active:boolean; onClick:()=>void }) {
  return (
    <button onClick={onClick} className={`text-sm transition-colors ${active ? "font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
      {label}
    </button>
  );
}

function Home({ setPage, symbol }: { setPage: (p:string)=>void; symbol: string }) {
  return (
    <main>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="rounded-full px-3 py-1 text-xs w-fit mb-4"><Sparkles className="h-3 w-3 mr-1" /> New Launch</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Authentic Indian Elegance, Ethically Crafted</h1>
            <p className="mt-4 text-muted-foreground">Discover hand‑picked sarees, artisan jewelry, and modern accessories. Curated from trusted makers and delivered with care.</p>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl px-6" onClick={() => setPage("shop")}>Shop Now</Button>
              <Button variant="outline" className="rounded-2xl px-6" onClick={() => setPage("about")}>Our Story</Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Ethical sourcing</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Fast Shipping</div>
              <div className="flex items-center gap-2"><CreditCard className="h-4 w-4" /> Cards • UPI • COD</div>
            </div>
          </div>
          <div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593030668930-8130abedb59b?q=80&w=1400&auto=format&fit=crop" alt="R4 Bloomz hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((c, idx) => (
            <Card key={c.key} className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[5/6]">
                  <img className="w-full h-full object-cover" src={`https://source.unsplash.com/random/800x1000?sig=${idx}&fashion,india`} alt={c.label} />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="font-semibold">{c.label}</div>
                  <Button variant="outline" className="px-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Explore</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Picks</h2>
          <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View all</Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0,4).map(p => (
            <ProductCard key={p.id} p={p} symbol={symbol} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 mb-4">
          <Instagram className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Follow @r4bloomz</h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" src={`https://source.unsplash.com/random/400x400?sig=${i+50}&saree,jewelry,indian,fashion`} alt="Instagram preview" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Shop({ symbol, filtered, activeCats, toggleCat, addToWishlist, wishlist, addToCart } : any) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Shop</h1>
        <Badge className="rounded-full">Curated • Authentic • Ethical</Badge>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Filter className="h-4 w-4" /> Categories</h3>
            <div className="space-y-2">
              {CATEGORIES.map(c => (
                <label key={c.key} className="flex items-center gap-2 text-sm">
                  <Checkbox checked={activeCats.has(c.key)} onCheckedChange={() => toggleCat(c.key)} /> {c.label}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Price</h3>
            <select className="border rounded-md px-2 py-2 text-sm w-full" defaultValue="all">
              <option value="all">All</option>
              <option value="0-50">Under 50</option>
              <option value="50-100">50 – 100</option>
              <option value="100+">100+</option>
            </select>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Sort</h3>
            <select className="border rounded-md px-2 py-2 text-sm w-full" defaultValue="featured">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <div className="rounded-2xl p-4 bg-gray-50">
            <h4 className="font-semibold">Size Guide</h4>
            <p className="text-sm text-muted-foreground mt-1">Sarees are free size; kurtas follow standard measurements. DM us on WhatsApp for custom fits.</p>
          </div>
        </aside>

        <section className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p:any) => (
              <Card key={p.id} className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[4/5]">
                    <img className="w-full h-full object-cover" src={p.img} alt={p.name} />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold leading-tight">{p.name}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <StarRow rating={p.rating} />
                          <span>({p.reviews})</span>
                        </div>
                      </div>
                      <div className="font-semibold">{symbol}{p.price.toFixed(2)}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map((t:string) => <Badge key={t} className="rounded-full bg-white border">{t}</Badge>)}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button className="flex-1" onClick={() => addToCart(p.id)}><ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart</Button>
                      {wishlist.includes(p.id) ? (
                        <Button variant="secondary" className="px-3">Saved</Button>
                      ) : (
                        <Button variant="outline" className="px-3" onClick={() => addToWishlist(p.id)} aria-label="Add to wishlist"><Heart className="h-4 w-4" /></Button>
                      )}
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">Pay by card/UPI or <span className="font-medium">Order on WhatsApp / COD</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProductCard({ p, symbol }: any) {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[4/5]"><img className="w-full h-full object-cover" src={p.img} alt={p.name} /></div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold leading-tight pr-4">{p.name}</div>
            <div className="font-semibold whitespace-nowrap">{symbol}{p.price.toFixed(2)}</div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <StarRow rating={p.rating} /> <span>({p.reviews})</span>
          </div>
          <div className="mt-3 flex gap-2">
            <Button className="flex-1"><ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart</Button>
            <Button variant="outline"><Heart className="h-4 w-4" /></Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold">Our Story</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">R4 Bloomz began as a home boutique, celebrating the richness of Indian textiles and craftsmanship. We partner with ethical artisans and trusted suppliers to bring sarees, kurtas, jewelry, and accessories that honor tradition while embracing modern style.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[{t: "Ethical Sourcing", d: "We prioritize fair trade, transparency, and responsible materials."}, {t: "Artisan Made", d: "Handloom weaves, hand‑worked details, and regional techniques."}, {t: "Thoughtful Curation", d: "A refined edit to make dressing effortless and elegant."}].map((b, i) => (
          <Card key={i} className="rounded-2xl"><CardHeader className="font-semibold">{b.t}</CardHeader><CardContent className="text-sm text-muted-foreground">{b.d}</CardContent></Card>
        ))}
      </div>
    </main>
  );
}

function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold">Lookbook & Journal</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {[
          {t: "Festive Saree Styling", img: "https://images.unsplash.com/photo-1605745341112-85968b19336e?q=80&w=1400&auto=format&fit=crop"},
          {t: "Guide to Jhumkas", img: "https://images.unsplash.com/photo-1617038260936-9d9d2beef502?q=80&w=1400&auto=format&fit=crop"},
          {t: "Monsoon‑Safe Fabrics", img: "https://images.unsplash.com/photo-1593030668930-8130abedb59b?q=80&w=1400&auto=format&fit=crop"},
        ].map((p, i) => (
          <Card key={i} className="rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video"><img className="w-full h-full object-cover" src={p.img} alt={p.t} /></div>
              <div className="p-4">
                <div className="font-semibold">{p.t}</div>
                <p className="text-sm text-muted-foreground mt-1">Tips, care, and pairings to make the most of your wardrobe.</p>
                <Button variant="link" className="px-0 mt-1">Read more →</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">Have a question about sizes, shipping, or custom orders? Send us a message and we’ll get back quickly.</p>
      <form className="mt-6 grid gap-4" onSubmit={(e)=> e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Email" />
        </div>
        <Input placeholder="Subject" />
        <Textarea placeholder="Message" rows={5} />
        <div className="flex gap-3 items-center">
          <Button type="submit">Send Message</Button>
          <a href="https://wa.me/12035550199?text=Hi%20R4%20Bloomz!%20I%E2%80%99d%20like%20to%20order." className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"><Phone className="h-4 w-4 mr-2" /> Order via WhatsApp</a>
        </div>
      </form>
    </main>
  );
}

function Policies() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold">Shipping & Returns</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p><strong>Shipping:</strong> Orders ship within 2–3 business days. Free shipping on orders over $75 in the U.S. and ₹5,000 in India.</p>
        <p><strong>Returns:</strong> Easy 7‑day returns on unworn items with tags. Jewelry is returnable if sealed.</p>
        <p><strong>Payments:</strong> We accept major cards, UPI, and offer Cash on Delivery in select areas.</p>
        <p><strong>Integrity Promise:</strong> Every piece is inspected for quality and sourced from trusted partners.</p>
      </div>
    </main>
  );
}

function Wishlist({ ids, removeFromWishlist, addToCart, symbol } : any) {
  const items = PRODUCTS.filter(p => ids.includes(p.id));
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Your Wishlist</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">No items saved yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <Card key={p.id} className="rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/5]"><img className="w-full h-full object-cover" src={p.img} alt={p.name} /></div>
                <div className="p-4">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{symbol}{p.price.toFixed(2)}</div>
                  <div className="mt-3 flex gap-2">
                    <Button onClick={() => addToCart(p.id)}><ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart</Button>
                    <Button variant="outline" onClick={() => removeFromWishlist(p.id)}>Remove</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}

function Cart({ cart, addToCart, symbol } : any) {
  const items = cart.map((i:any) => ({ ...i, product: PRODUCTS.find(p => p.id === i.id)! }));
  const subtotal = items.reduce((n:number, i:any) => n + i.product.price * i.qty, 0);
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map(({ product, qty }: any) => (
            <Card key={product.id} className="rounded-2xl">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden"><img className="w-full h-full object-cover" src={product.img} alt={product.name} /></div>
                <div className="flex-1">
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-sm text-muted-foreground">Qty: {qty}</div>
                </div>
                <div className="font-semibold">{symbol}{(product.price * qty).toFixed(2)}</div>
                <Button variant="outline" onClick={() => addToCart(product.id)}>+1</Button>
              </CardContent>
            </Card>
          ))}
          <div className="flex items-center justify-between font-semibold">
            <div>Subtotal</div>
            <div>{symbol}{subtotal.toFixed(2)}</div>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1"><CreditCard className="h-4 w-4 mr-2" /> Checkout</Button>
            <a href="https://wa.me/12035550199?text=Hi%20R4%20Bloomz!%20I%E2%80%99d%20like%20to%20order." className="flex-1 inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"><Phone className="h-4 w-4 mr-2" /> Order via WhatsApp</a>
          </div>
        </div>
      )}
    </main>
  );
}

function AuthModal({ mode, onClose }: { mode: "login"|"register"; onClose: ()=>void }) {
  return (
    <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
        <button className="absolute right-3 top-3" onClick={onClose} aria-label="Close"><X className="h-5 w-5" /></button>
        <div className="text-2xl font-bold mb-1">{mode === 'login' ? 'Welcome back' : 'Create account'}</div>
        <div className="text-sm text-muted-foreground mb-6">Join R4 Bloomz to save favorites and track orders.</div>
        <div className="grid gap-3">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          {mode === 'register' && <Input placeholder="Confirm password" type="password" />}
          <Button className="mt-2">{mode === 'login' ? 'Log in' : 'Sign up'}</Button>
        </div>
      </div>
    </div>
  );
}
