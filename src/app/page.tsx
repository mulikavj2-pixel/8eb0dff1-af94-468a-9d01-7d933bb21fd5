"use client"

import { Award, Users, Zap, TrendingUp, Star, HelpCircle } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AutoDrivePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="animatedGrid"
      cardStyle="frosted-heavy"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[
            {"name": "Home", "id": "hero"},
            {"name": "Inventory", "id": "products"},
            {"name": "About", "id": "about"},
            {"name": "FAQs", "id": "faq"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName="AutoDrive"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896184090-dr9qzl36.jpg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard 
          logoText="AutoDrive"
          description="Discover premium vehicles tailored to your lifestyle. Premium selection, transparent pricing, and expert support."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896185387-8oi4eezz.jpg"
          imageAlt="Featured luxury vehicle in showroom"
          frameStyle="card"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree 
          products={[
            {
              "id": "1",
              "name": "2024 Premium Sedan",
              "price": "$35,000",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896186865-qrgvf323.jpg",
              "imageAlt": "2024 premium sedan"
            },
            {
              "id": "2",
              "name": "2024 Luxury SUV",
              "price": "$48,500",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896189120-t3rfcboy.jpg",
              "imageAlt": "2024 luxury SUV"
            },
            {
              "id": "3",
              "name": "2023 Sports Car",
              "price": "$52,000",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896190380-dclijf14.jpg",
              "imageAlt": "2023 sports car"
            },
            {
              "id": "4",
              "name": "2024 Professional Sedan",
              "price": "$38,000",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896192530-39h8tt5c.jpg",
              "imageAlt": "2024 professional sedan"
            },
            {
              "id": "5",
              "name": "2024 Family SUV",
              "price": "$42,000",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896193737-nt4yoeyz.jpg",
              "imageAlt": "2024 family SUV"
            },
            {
              "id": "6",
              "name": "2023 Compact Car",
              "price": "$22,000",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896195201-pvi0lt1q.jpg",
              "imageAlt": "2023 compact car"
            }
          ]}
          title="Featured Inventory"
          description="Browse our carefully selected collection of premium vehicles"
          tag="New Arrivals"
          textboxLayout="default"
          animationType="blur-reveal"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric 
          title="Why Choose AutoDrive for Your Next Vehicle"
          metrics={[
            {
              "icon": Award,
              "label": "Customer Satisfaction",
              "value": "98%"
            },
            {
              "icon": Users,
              "label": "Happy Customers",
              "value": "5000+"
            },
            {
              "icon": Zap,
              "label": "Years in Business",
              "value": "15+"
            },
            {
              "icon": TrendingUp,
              "label": "Vehicles Sold",
              "value": "10,000+"
            }
          ]}
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve 
          cardTitle="Join thousands of satisfied customers who found their perfect vehicle with AutoDrive"
          cardTag="Customer Stories"
          cardTagIcon={Star}
          testimonials={[
            {
              "id": "1",
              "name": "Sarah Johnson",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896196745-ituj596g.jpg",
              "imageAlt": "Sarah Johnson"
            },
            {
              "id": "2",
              "name": "Michael Chen",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896197861-ekmibvvm.jpg",
              "imageAlt": "Michael Chen"
            },
            {
              "id": "3",
              "name": "James Wilson",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896199745-sj58u8d8.jpg",
              "imageAlt": "James Wilson"
            },
            {
              "id": "4",
              "name": "Emma Davis",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896201407-clz8s9si.jpg",
              "imageAlt": "Emma Davis"
            },
            {
              "id": "5",
              "name": "David Rodriguez",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896203530-9g9p571z.jpg",
              "imageAlt": "David Rodriguez"
            },
            {
              "id": "6",
              "name": "Lisa Anderson",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896204844-afl5vc4f.jpg",
              "imageAlt": "Lisa Anderson"
            }
          ]}
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="brands" data-section="brands">
        <SocialProofThree 
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896206817-r1dk63r1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896208245-q8bol16m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896209562-9s6f1dvg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896211189-kmlgrcnj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896212401-rohgltes.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896214712-7hem9xtl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896216059-n89nnvo0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765896217872-ic8iatl4.jpg"
          ]
          title="Premium Brands We Represent"
          description="We partner with the world's leading automotive manufacturers"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          topMarqueeDirection="left"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase 
          title="Frequently Asked Questions"
          description="Find answers to common questions about our vehicles and buying process"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          faqs={[
            {
              "id": "1",
              "title": "What is your return policy?",
              "content": "We offer a 7-day return policy on all vehicles. If you're not completely satisfied, we'll work with you to find the perfect car or process a full refund."
            },
            {
              "id": "2",
              "title": "How long does the buying process take?",
              "content": "The typical buying process takes 2-3 days from selection to completion. We handle all paperwork, financing, and delivery arrangements for your convenience."
            },
            {
              "id": "3",
              "title": "Do you offer financing options?",
              "content": "Yes, we partner with leading financial institutions to offer flexible financing plans. We can discuss payment options that fit your budget."
            },
            {
              "id": "4",
              "title": "Are your vehicles inspected?",
              "content": "Absolutely. Every vehicle undergoes a comprehensive 150-point inspection and comes with a warranty for your peace of mind."
            },
            {
              "id": "5",
              "title": "Can I trade in my current vehicle?",
              "content": "Yes, we accept trade-ins for all vehicle types. We offer competitive valuations based on market rates and condition."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm 
          title="Get in Touch with Our Team"
          description="Have questions about our inventory or services? Contact us today and we'll help you find your perfect vehicle."
          useInvertedBackground="invertDefault"
          inputs={[
            {
              "name": "name",
              "type": "text",
              "placeholder": "Your Name",
              "required": true
            },
            {
              "name": "email",
              "type": "email",
              "placeholder": "Your Email",
              "required": true
            },
            {
              "name": "phone",
              "type": "tel",
              "placeholder": "Phone Number",
              "required": false
            }
          ]}
          textarea={{
            "name": "message",
            "placeholder": "Tell us about the vehicle you're looking for...",
            "rows": 5,
            "required": true
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal 
          logoText="AutoDrive"
          logoAlt="AutoDrive Logo"
        />
      </div>
    </ThemeProvider>
  );
}