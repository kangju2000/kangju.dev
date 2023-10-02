export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID!

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: Gtag.EventNames
  category: Gtag.EventParams['event_category']
  label: Gtag.EventParams['event_label']
  value: Gtag.EventParams['value']
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
