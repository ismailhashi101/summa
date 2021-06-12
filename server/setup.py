from setuptools import setup

setup(
    name='summa',
    version='1.0',
    long_description='Server for the summa web application.',
    include_package_data=True,
    zip_safe=False,
    install_requires=['Flask']
)