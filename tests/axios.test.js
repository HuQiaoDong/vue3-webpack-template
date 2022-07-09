
import {testApi} from "@/api/base";

// mock here
jest.mock('@/api/base', () => {
    return {
        __esModule: true,
        // mock baseApi
        testApi: jest.fn(
            (status) =>
                new Promise((resolve, reject) => {
                    if (status > 0) {
                        resolve({ data: 'zzz' });
                    } else {
                        reject(`fetch failed`);
                    }
                }),
        ),
    };
});

describe('base api test', () => {
    test('fetch success', async () => {
        const res = await testApi(1)
        expect(res.data).toBe('zzz'); // 这里拿到的是mock接口里的数据
    });
    test('fetch fail', async () => {
        const res =await expect(testApi(0)).rejects.toThrowError('status is failed!')
        // expect(res.data).rejects.toThrowError('status is failed!');
    });
});
