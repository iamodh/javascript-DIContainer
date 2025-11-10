import DIContainer from '../src/Container';

describe('DI컨테이너 클래스 테스트', () => {
  describe('register 메서드 테스트', () => {
    test('serviceName과 service를 입력 받아 컨테이너에 등록해야 한다.', () => {
      const container = new DIContainer();

      const SERVICE_NAME = 'mockService';
      class MockService {}

      container.register(SERVICE_NAME, MockService);
      expect(container.hasService(SERVICE_NAME)).toBe(true);
    });
  });
  describe('resolve 메서드 테스트', () => {
    test('등록된 service를 찾아 인스턴스를 생성 후 반환해야 한다.', () => {
      const container = new DIContainer();

      const SERVICE_NAME = 'mockService';
      class MockService {}

      container.register(SERVICE_NAME, MockService);

      expect(container.resolve(SERVICE_NAME)).toBeInstanceOf(MockService);
    });
    test('service가 등록되지 않았다면 예외가 발생한다.', () => {
      const container = new DIContainer();

      const SERVICE_NAME = 'noService';

      expect(() => container.resolve(SERVICE_NAME)).toThrow('[ERROR]');
    });
  });
});
