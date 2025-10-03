import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/app/components/Navbar"; // Will create this next

export default function Home() {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Enterprise Solutions for <span className="text-blue-400">Digital Excellence</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Transform your business with cutting-edge technology solutions designed for scale, security, and performance.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg">
              Download Portfolio
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 px-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">500+</h2>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">98%</h2>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">24/7</h2>
            <p className="text-gray-600">Support Available</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">15+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Comprehensive Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mt-2">User-centered design solutions that combine aesthetics with usability.</p>
                <ul className="mt-4 list-disc list-inside text-gray-500">
                  <li>User Research</li>
                  <li>Prototyping</li>
                  <li>Usability Testing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mt-2">Enterprise-grade applications built with cutting-edge technologies.</p>
                <ul className="mt-4 list-disc list-inside text-gray-500">
                  <li>React/Next.js</li>
                  <li>Node.js Backend</li>
                  <li>Database Integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}