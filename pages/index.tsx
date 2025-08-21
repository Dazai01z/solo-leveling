const Home: NextPage = () => {
  return (
    <main className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Solo Leveling — Archive
        </h1>
        <nav className="space-x-4 text-sm">
          <a href="/chapters" className="underline-offset-4">Chapters</a>
          <a href="/characters">Characters</a>
          <a href="/gallery">Gallery</a>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <article className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Latest updates</h2>
          <p className="text-sm text-slate-600">
            Chapter releases, translation progress, site news.
          </p>
        </article>

        <article className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Featured character — Sung Jin-woo</h2>
          <p className="text-sm text-slate-600">
            Character profile, skills, timeline and appearances.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
