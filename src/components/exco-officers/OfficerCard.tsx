'use client';
import Image from 'next/image';

type OfficerCardProps = {
  officer: {
    name: string;
    year: number;
    department: string;
    image: string;
    bio?: string;
  };
};

export default function OfficerCard({ officer }: OfficerCardProps) {
  const { name, year, department, image, bio } = officer;
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative aspect-square w-full">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="bg-secondary absolute top-0 left-0 px-3 py-1 text-xs font-semibold text-white">
          {department}
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-secondary-600 text-sm">Year: {year}</p>
      </div>
    </div>
  );
}
