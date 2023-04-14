package com.practice.secondapp.service.mapper;

import com.practice.secondapp.domain.Address;
import com.practice.secondapp.domain.Employee;
import com.practice.secondapp.service.dto.AddressDTO;
import com.practice.secondapp.service.dto.EmployeeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Address} and its DTO {@link AddressDTO}.
 */
@Mapper(componentModel = "spring")
public interface AddressMapper extends EntityMapper<AddressDTO, Address> {
    @Mapping(target = "employee", source = "employee", qualifiedByName = "employeeId")
    AddressDTO toDto(Address s);

    @Named("employeeId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    EmployeeDTO toDtoEmployeeId(Employee employee);
}
