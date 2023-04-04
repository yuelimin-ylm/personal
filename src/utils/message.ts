import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/badge/style/css';

export function messageSuccess(message: string, duration = 2000): void {
  ElMessage.success({
    message,
    duration,
    grouping: true
  });
}

export function messageInfo(message: string, duration = 2000): void {
  ElMessage.info({
    message,
    duration,
    grouping: true
  });
}

export function messageWarning(message: string, duration = 2000): void {
  ElMessage.warning({
    message,
    duration,
    grouping: true
  });
}

export function messageError(message: string, duration = 2000): void {
  ElMessage.error({
    message,
    duration,
    grouping: true
  });
}
