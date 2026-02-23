export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-black py-12 text-center text-neutral-400">
            <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold tracking-tighter text-white mb-6">BLOOM.</h2>
                <div className="flex gap-6 mb-8 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <p className="text-xs">© {new Date().getFullYear()} Bloom Directory. Minimal by Design.</p>
            </div>
        </footer>
    );
}
