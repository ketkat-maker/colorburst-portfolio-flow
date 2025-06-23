
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-neon-cyan rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-neon-pink rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-electric rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />
      
      {/* Floating squares */}
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-gradient-to-r from-neon-cyan to-neon-purple rotate-45 animate-float opacity-20" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-3/4 right-10 w-3 h-3 bg-gradient-to-r from-neon-pink to-electric rotate-45 animate-float opacity-30" style={{ animationDelay: '1.5s' }} />
      
      {/* Large background blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
    </div>
  );
};

export default FloatingElements;
