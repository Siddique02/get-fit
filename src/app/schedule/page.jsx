const scheduleData = {
  Monday: [
    { time: '6:00 AM', class: 'HIIT Blast' },
    { time: '9:00 AM', class: 'Power Yoga' },
    { time: '5:00 PM', class: 'Strength Circuit' },
    { time: '6:00 PM', class: 'Cycle Sync' },
  ],
  Tuesday: [
    { time: '6:00 AM', class: 'Cycle Sync' },
    { time: '12:00 PM', class: 'HIIT Blast' },
    { time: '5:00 PM', class: 'Power Yoga' },
    { time: '7:00 PM', class: 'Strength Circuit' },
  ],
  Wednesday: [
    { time: '6:00 AM', class: 'Strength Circuit' },
    { time: '9:00 AM', class: 'Power Yoga' },
    { time: '5:00 PM', class: 'HIIT Blast' },
    { time: '6:00 PM', class: 'Cycle Sync' },
  ],
  Thursday: [
    { time: '6:00 AM', class: 'Cycle Sync' },
    { time: '12:00 PM', class: 'HIIT Blast' },
    { time: '5:00 PM', class: 'Power Yoga' },
    { time: '7:00 PM', class: 'Strength Circuit' },
  ],
  Friday: [
    { time: '6:00 AM', class: 'HIIT Blast' },
    { time: '9:00 AM', class: 'Power Yoga' },
    { time: '4:00 PM', class: 'Strength Circuit' },
    { time: '5:00 PM', class: 'Cycle Sync' },
  ],
  Saturday: [
    { time: '8:00 AM', class: 'Full Body Burn' },
    { time: '10:00 AM', class: 'Power Yoga' },
    { time: '11:00 AM', class: 'Cycle Sync' },
  ],
  Sunday: [
    { time: '10:00 AM', class: 'Restorative Yoga' },
    { time: '12:00 PM', class: 'Open Gym' },
  ],
}

export default function Schedule() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-black/30 py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider high-contrast">Class Schedule</h1>
          <p className="text-lg text-white/70 mt-2 max-w-2xl mx-auto">Plan your week and join our high-energy group classes. Consistency is key.</p>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-1">
            {Object.entries(scheduleData).map(([day, classes]) => (
              <div key={day} className="bg-white/5 border border-white/10">
                <h3 className="font-display text-center text-xl font-bold uppercase py-3 bg-(--brand-lime)/10 border-b border-white/10">{day}</h3>
                <div className="p-4 space-y-3">
                  {classes.length > 0 ? (
                    classes.map((item, index) => (
                      <div key={index} className="bg-black/30 p-3 rounded-md text-sm">
                        <p className="font-bold text-(--brand-lime)">{item.time}</p>
                        <p className="text-white/80">{item.class}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-white/50 text-center py-8">No classes scheduled.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}