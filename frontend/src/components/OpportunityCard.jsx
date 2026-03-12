import { Briefcase, DollarSign, Star } from 'lucide-react';

const OpportunityCard = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all p-6 flex flex-col gap-4">
      
      {/* Header: Platform & Date */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold bg-purple-100 text-primary px-3 py-1 rounded-full">
          {opportunity.platform}
        </span>
        <span className="text-xs text-gray-400">{opportunity.date_posted}</span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-lg text-dark leading-tight">
        {opportunity.title}
      </h3>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {opportunity.skills_required.map((skill, index) => (
          <span 
            key={index} 
            className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer: Pay & Level */}
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
        <div className="flex items-center gap-1 text-accent font-bold">
          <DollarSign size={16} />
          <span>{opportunity.pay_range}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Star size={14} className="text-yellow-500" />
          {opportunity.skill_level}
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;