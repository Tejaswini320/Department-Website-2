import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Small Banner / Header Block */}
      <div className="bg-navy py-16 px-4 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <MapPin size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contact <span className="text-primary-light">Us</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Get in touch with the Department of Computer Science for any inquiries or support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 animate-fade-in -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              
              {/* Location Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <MapPin size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-3 text-xl">Location</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lal Taki Road, Tarakpur,<br />
                  Ahmednagar – 414001, Maharashtra
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Phone size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-3 text-xl">Phone</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  0241-2324024<br />0241-2324715
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Mail size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-3 text-xl">Email</h3>
                <a href="mailto:computerscience@newartsdcs.ac.in" className="text-sm text-primary font-medium hover:underline break-all inline-block">
                  computerscience@<br/>newartsdcs.ac.in
                </a>
              </div>

              {/* College Hours Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Clock size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-3 text-xl">College Hours</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Monday – Saturday<br />
                  9:00 AM – 5:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white p-3 md:p-4 rounded-[2rem] shadow-2xl shadow-navy/10 border border-gray-100 h-full min-h-[400px] lg:min-h-[600px]">
              <div className="rounded-[1.5rem] overflow-hidden w-full h-full relative group">
                {/* Overlay map message on hover */}
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 flex items-center justify-center">
                  <span className="bg-white/90 text-navy font-semibold px-6 py-3 rounded-full shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Interactive Map
                  </span>
                </div>
                <iframe
                  title="College Location"
                  src="https://maps.google.com/maps?q=AJMVPS+New+Arts+Commerce+Science+College+Ahmednagar&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
