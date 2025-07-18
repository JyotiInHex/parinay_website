export const nameRegex = /^[a-zA-Z\s]{2,}$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const pinCodeRegex = /^[1-9][0-9]{5}$/;
export const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
export const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
export const urlRegex = /^(https?:\/\/)?([\w\d-]+\.){1,}[\w]{2,}(\/.+)*\/?$/;
export const imageFileRegex = /\.(jpg|jpeg|png|gif)$/i;
export const otpRegex = /^\d{4,6}$/;

export const validateField = (value, regex) => {
    return regex.test(value.trim());
};
