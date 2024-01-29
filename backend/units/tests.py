from rest_framework.test import APITestCase
from rest_framework import status
from units.models import Unit

class UnitAPITest(APITestCase):
    def setUp(self):
        pass

    def test_can_create_unit(self):
        url = '/api/units/'
        data = {'address': '123 foo lane'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)