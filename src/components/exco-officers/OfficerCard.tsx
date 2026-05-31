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
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="relative aspect-square w-full bg-gray-50">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="bg-cyan-600 absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-white rounded-md shadow-sm">
          {department}
        </div>
      </div>
      <div className="flex flex-col p-5 text-left space-y-2">
        <div>
          <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">{name}</h3>
          {bio && <p className="text-xs text-gray-500 font-medium mt-1">{bio}</p>}
        </div>
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
          <span>Tenure Period</span>
          <span className="text-cyan-600">2021 - 2023</span>
        </div>
      </div>
    </div>
  );
}
