import { useState } from 'react';
import { X, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function EnquireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, submit this to the server
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {/* Info Column */}
        <div className="modal-info-side">
          <div>
            <h3 className="modal-info-title">Luxury Beachfront Living Awaits</h3>
            <p className="modal-info-text">
              Get in touch with our team for enquiries, personalised consultations, or to explore our prestigious developments in the UAE and Caribbean.
            </p>
          </div>

          <div className="contact-info-list">
            <div className="info-item">
              <Mail className="info-icon" size={18} />
              <div>
                <h4 className="info-label">UAE Enquiries</h4>
                <p className="info-val">info@rangerak.ae</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" size={18} />
              <div>
                <h4 className="info-label">CBI Enquiries</h4>
                <p className="info-val">info@rangedevelopmentsgroup.com</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" size={18} />
              <div>
                <h4 className="info-label">Phone Support</h4>
                <p className="info-val">+971 4 325 3447</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin className="info-icon" size={18} />
              <div>
                <h4 className="info-label">Address</h4>
                <p className="info-val">Boulevard Plaza, Tower 2, Office 1104, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="modal-form-side">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <CheckCircle size={60} color="#105670" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.75rem', color: '#092c38', marginBottom: '0.75rem' }}>Thank You</h3>
              <p style={{ color: '#5e6f73', fontSize: '1rem', lineHeight: '1.5' }}>
                Your submission has been received. One of our luxury property consultants will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#092c38', marginBottom: '1.5rem', fontFamily: 'var(--font-title)' }}>Express Your Interest</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="modal-name">Name *</label>
                  <input
                    type="text"
                    id="modal-name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="modal-email">Email *</label>
                    <input
                      type="email"
                      id="modal-email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="modal-phone"
                      className="form-control"
                      placeholder="+971..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-subject">Inquiry Type</label>
                  <select
                    id="modal-subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="UAE Real Estate">UAE Beachfront Properties</option>
                    <option value="Citizenship by Investment">Citizenship by Investment</option>
                    <option value="Agent Program">Be an Agent</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-message">Message *</label>
                  <textarea
                    id="modal-message"
                    className="form-control"
                    rows="4"
                    placeholder="Tell us about your requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '1rem', padding: '0.85rem' }}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
