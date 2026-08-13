function StaffCard({ member }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 className="font-medium mb-1">{member.name}</h3>
      <p className="text-sm text-primary">{member.role}</p>
    </div>
  );
}

export default StaffCard;
