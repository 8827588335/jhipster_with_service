package com.practice.secondapp.service.mapper;

import com.practice.secondapp.domain.Department;
import com.practice.secondapp.domain.Employee;
import com.practice.secondapp.service.dto.DepartmentDTO;
import com.practice.secondapp.service.dto.EmployeeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Department} and its DTO {@link DepartmentDTO}.
 */
@Mapper(componentModel = "spring")
public interface DepartmentMapper extends EntityMapper<DepartmentDTO, Department> {
    @Mapping(target = "employee", source = "employee", qualifiedByName = "employeeId")
    DepartmentDTO toDto(Department s);

    @Named("employeeId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    EmployeeDTO toDtoEmployeeId(Employee employee);
}
