import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';
import { siteConfig } from '../../data/siteConfig';

function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (formData.name.trim().length < 3) errs.name = t('nameError');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = t('emailError');
    if (formData.subject.trim().length < 3) errs.subject = t('subjectError');
    if (formData.message.trim().length < 10) errs.message = t('messageError');
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('contact')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('contactPageTitle')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-primary font-medium mb-3">{t('address')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{siteConfig.address}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-primary font-medium mb-3">{t('email')}</h3>
            <p className="text-gray-600 text-sm">{siteConfig.email}</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 mb-8 h-80">
          <iframe
            title="BNU Faculty of Computer Science location"
            src={siteConfig.mapEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-2xl">
          <h3 className="font-medium text-lg mb-5">{t('sendMessage')}</h3>
          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
              {t('contactSuccess')}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1.5">{t('name')}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1.5">{t('emailLabel')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1.5">{t('subject')}</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1.5">{t('message')}</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
