import Hero from '@components/shared/Hero';
import Dropdown from '@components/shared/Dropdown';

const ABOUT_SECTIONS = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale...',
  },
  {
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa...',
  },
  {
    title: 'Service',
    content:
      'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite...',
  },
  { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa...' },
];

export default function About() {
  return (
    <div className="px-20">
      <Hero image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" />

      <div className="max-w-3xl mx-auto space-y-6">
        {ABOUT_SECTIONS.map((section, index) => (
          <Dropdown key={index} title={section.title}>
            {section.content}
          </Dropdown>
        ))}
      </div>
    </div>
  );
}
