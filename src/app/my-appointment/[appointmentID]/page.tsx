const AppointmentDetails = async ({
  params,
}: {
  params: Promise<{ appointmentID: string }>;
}) => {
  const { appointmentID } = await params;
  console.log("Appointment ID:", appointmentID);

  return (
    <div>
      <h1>Appointment Details for {appointmentID}</h1>
    </div>
  );
};

export default AppointmentDetails;
