export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a
        href="https://calendly.com/votre-calendly"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:shadow-xl"
      >
        Prendre un RDV gratuit
      </a>
    </div>
  );
}
