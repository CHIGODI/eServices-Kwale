import React from 'react';
import { ChevronRight, FileText, Building2, Heart, Droplets, GraduationCap, MapPin, Phone, Mail, Globe, Users, Briefcase, Shield } from 'lucide-react';

// Next.js page component with server-side rendering support
const KwaleEServicesPortal = () => {
    const services = [
        {
            id: 'business-permits',
            title: 'Business Permits & Licenses',
            description: 'Apply for business licenses, permits, and certifications online through our streamlined digital platform.',
            icon: <Building2 className="w-8 h-8" />,
            color: 'from-blue-500 to-blue-600',
            features: ['Single Business Permit', 'Trade License', 'Food Handler Permits', 'Construction Permits']
        },
        {
            id: 'health-services',
            title: 'Health Services',
            description: 'Access healthcare services, book appointments, and manage health records digitally.',
            icon: <Heart className="w-8 h-8" />,
            color: 'from-red-500 to-red-600',
            features: ['Hospital Appointments', 'Health Records', 'Immunization Tracking', 'Medical Certificates']
        },
        {
            id: 'water-services',
            title: 'Water & Sewerage Services',
            description: 'Manage water connections, report issues, and access sewerage services online.',
            icon: <Droplets className="w-8 h-8" />,
            color: 'from-cyan-500 to-cyan-600',
            features: ['Water Connection', 'Billing Services', 'Service Requests', 'Quality Reports']
        },
        {
            id: 'education-services',
            title: 'Education Services',
            description: 'Access educational resources, bursary applications, and school management services.',
            icon: <GraduationCap className="w-8 h-8" />,
            color: 'from-purple-500 to-purple-600',
            features: ['Bursary Applications', 'School Registration', 'Educational Resources', 'Scholarship Programs']
        },
        {
            id: 'land-services',
            title: 'Land Administration',
            description: 'Handle land records, title deeds, and property-related services efficiently.',
            icon: <MapPin className="w-8 h-8" />,
            color: 'from-green-500 to-green-600',
            features: ['Title Deed Processing', 'Land Search', 'Property Valuation', 'Survey Services']
        },
        {
            id: 'citizen-services',
            title: 'Citizen Services',
            description: 'Access various citizen services including birth certificates, IDs, and civic participation.',
            icon: <Users className="w-8 h-8" />,
            color: 'from-orange-500 to-orange-600',
            features: ['Birth Certificates', 'Death Certificates', 'Public Participation', 'Complaint Resolution']
        }
    ];

    const stats = [
        { label: 'Citizens Served', value: '866K+', icon: <Users className="w-6 h-6" /> },
        { label: 'Digital Services', value: '25+', icon: <Globe className="w-6 h-6" /> },
        { label: 'Businesses Registered', value: '5K+', icon: <Briefcase className="w-6 h-6" /> },
        { label: 'Secure Transactions', value: '99.9%', icon: <Shield className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Kwale County</h1>
                                <p className="text-sm text-gray-600">eServices Portal</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Portal Login
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/90"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzB3O3N0b3Atb3BhY2l0eTowLjMiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzEwODA0MDtzdG9wLW9wYWNpdHk6MC4yIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI4MCIgZmlsbD0iIzM0ODJmNiIgb3BhY2l0eT0iMC4xIi8+CjxjaXJjbGUgY3g9IjEwMDAiIGN5PSI0MDAiIHI9IjYwIiBmaWxsPSIjMTA5ODNhIiBvcGFjaXR5PSIwLjEiLz4KPGNpcmNsZSBjeD0iNjAwIiBjeT0iMTAwIiByPSI0MCIgZmlsbD0iIzMzODJmNiIgb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4K')`
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Karibu Kwale County
                            <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-200">
                                Digital Services Portal
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Umoja Ni Nguvu - Access county services online with ease, efficiency, and transparency.
                            Your gateway to digital governance in Kenya's coastal gem.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center">
                                Access Services
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Digital Services Available
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Streamlined online services designed to serve the people of Kwale County efficiently and transparently.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                                <div className="p-8">
                                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                                        Access Service
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About Kwale County
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    Kwale County is strategically located in Kenya's coastal region, bordering the Indian Ocean
                                    and Tanzania. Home to over 866,000 residents, we are committed to digital transformation
                                    and improved service delivery.
                                </p>
                                <p>
                                    Our county is renowned for Diani Beach, Shimba Hills National Reserve, and rich cultural
                                    heritage of the Digo and Duruma communities. We're driving economic growth through
                                    tourism, agriculture, and renewable energy initiatives.
                                </p>
                                <p>
                                    Under the leadership of H.E. Governor Fatuma Achani, with our motto "Umoja Ni Nguvu"
                                    (Unity is Strength), we continue building a prosperous, inclusive, and digitally
                                    connected county.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl h-96 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Coastal Paradise</h3>
                                    <p className="text-blue-100">250 km of pristine coastline</p>
                                    <p className="text-blue-100">Rich Mijikenda culture</p>
                                    <p className="text-blue-100">Gateway to East Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of citizens already using our digital services.
                        Experience efficient, transparent, and accessible county services today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                            Create Account
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                                    <span>+254 XX XXX XXXX</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                    <span>info@kwale.go.ke</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                                    <span>County Headquarters, Kwale Town</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <div className="space-y-2">
                                <a href="#" className="block hover:text-blue-400 transition-colors">County Website</a>
                                <a href="#" className="block hover:text-blue-400 transition-colors">Tender Portal</a>
                                <a href="#" className="block hover:text-blue-400 transition-colors">Job Vacancies</a>
                                <a href="#" className="block hover:text-blue-400 transition-colors">Public Participation</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                                <p>Saturday: 8:00 AM - 1:00 PM</p>
                                <p>Sunday: Closed</p>
                                <p className="text-blue-400 font-medium">24/7 Online Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 County Government of Kwale. All rights reserved.</p>
                        <p className="mt-2">Umoja Ni Nguvu | Unity is Strength</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default KwaleEServicesPortal;