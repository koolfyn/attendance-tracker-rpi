import axios from 'axios';
import { AttendanceEntry } from '../types/UserInfoTypes';

export const postAttendanceEntry = async (id: string, date: string) => {
    return await axios.post('/attendance/push', {
        studentId: id,
        dateTime: date,
    });
};

export const getAttendanceCache = async () => {
    return (await axios.get<AttendanceEntry[]>('/attendance/cache')).data;
};

export const flushAttendanceCache = async () => {
    await axios.post('/attendance/cache/flush');
};

export const clearAttendanceCache = async () => {
    await axios.post('/attendance/cache/clear');
};

export const isAttendanceOnline = async () => {
    return (await axios.get<boolean>('/attendance/online')).data;
};