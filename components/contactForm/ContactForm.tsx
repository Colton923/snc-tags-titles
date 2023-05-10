'use client'

import styles from './ContactForm.module.scss'
import React, { useState } from 'react'

const ContactForm = () => {
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setForm({
      first: '',
      last: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              value={form.first}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" value={form.last} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
