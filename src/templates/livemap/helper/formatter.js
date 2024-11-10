// formata a data a partir de um timestamp
export const dateHelper = (t) => {
  let datetime = new Date(t * 1000);
  let formatDatetime = `${datetime.toLocaleDateString(
    "pt-BR"
  )} - ${datetime.getHours()}:${String(datetime.getMinutes()).padStart(2, "0")}`;

  return formatDatetime;
};

export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formatted = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;

  return formatted.replace(".", ",");
}


export const unitHelper = (activeGlobe, number) => {
  if (number > 0) {
    switch (activeGlobe) {
      case "sales":
        return (
          new Intl.NumberFormat(
            "pt-BR",
            {}
          ).format(number) + " acessos"
        );
      case "traffic":
        return formatBytes(number)
      case "traffic-offload":
        return (
          new Intl.NumberFormat(
            "pt-BR",
            {
              maximumSignificantDigits: 4
            }).format(number) + "% economizados"
        );
      case "attacks":
        return (
          new Intl.NumberFormat(
            "pt-BR",
            {}
          ).format(number) + " ataques"
        );
    }
  }
};

export const noLabelunitHelper = (activeGlobe, number) => {
  if (number > 0) {
    switch (activeGlobe) {
      case "sales":
        return (
          new Intl.NumberFormat(
            "pt-br",
            {
              notation: "compact",
              compactDisplay: "long",
              maximumFractionDigits: 2
            }
          ).format(number)
        );
      case "traffic":
        return formatBytes(number)
      case "attacks":
        return (
          new Intl.NumberFormat(
            "pt-br",
            {
              notation: "compact",
              compactDisplay: "long",
              maximumFractionDigits: 2
            }
          ).format(number)
        );
    }
  }
};
