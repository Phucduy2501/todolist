export default function GoogleMapEmbed() {
  const openGoogleMaps = () => {
    window.open(
      "https://maps.google.com/?q=Đại+Học+Duy+Tân+Hòa+Khánh+Nam",
      "_blank"
    );
  };

  return (
    <div className="map-wrapper" onClick={openGoogleMaps}>
      <div className="map-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d872.371527051798!2d108.16016756616615!3d16.048808389700287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421938d61a3ce5%3A0x29d80f3ebbdcb44a!2zxJDhuqFpIEjhu41jIER1eSBUw6JuIEjDsmEgS2jDoW5oIE5hbQ!5e0!3m2!1svi!2s!4v1767869441421!5m2!1svi!2s"
          className="map-iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </div>
  );
}
